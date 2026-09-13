"use client"

import type React from "react"
import {useEffect, useRef} from "react"

// Grid and cell configuration
const CELL_SIZE_DIVISOR = 8 // Controls the overall size of cells
const GRID_CELL_MULTIPLIER = 2 // Extends the grid beyond visible canvas
const ISOMETRIC_HEIGHT_RATIO = 0.5 // Controls the isometric height proportion
const ISOMETRIC_X_FACTOR = 2 // Divisor for X coordinate calculation in isometric projection
const ISOMETRIC_Y_FACTOR = 4 // Divisor for Y coordinate calculation in isometric projection

// Animation configuration. Both rates were tuned per frame at 60fps and are
// converted to per-second rates so the motion is identical at any refresh rate.
const REFERENCE_FRAME_RATE = 60
const ANIMATION_SPEED = 0.05 * REFERENCE_FRAME_RATE // radians per second
const BACKGROUND_FADE_PER_REFERENCE_FRAME = 0.1
const WAVE_FREQUENCY = 0.5 // Controls the frequency of the sine wave

// Visual styling
const NEON_CYAN = "rgba(0,255,255,.8)"
const NEON_MAGENTA = "rgba(255,0,255,.8)"
const NEON_YELLOW = "rgba(255,255,0,.5)"
const VERTICAL_LINES_COLOR = "rgba(255,255,255,.3)"

type MazeProps = {
    height?: number,
    width?: number,
}

const NeonIsometricMaze = ({height, width}: MazeProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let animationTime = 0
        let lastFrameTime = performance.now()
        let animationFrameId = 0
        let running = false
        let canvasOnScreen = false
        let disposed = false

        const sizeCanvas = () => {
            canvas.width = width ?? window.innerWidth
            canvas.height = height ?? window.innerHeight
            const cellSize = Math.min(canvas.width, canvas.height) / CELL_SIZE_DIVISOR
            const topFaceGradient = ctx.createLinearGradient(0, 0, 1, 0)
            topFaceGradient.addColorStop(0, NEON_CYAN)
            topFaceGradient.addColorStop(1, NEON_MAGENTA)
            return {cellSize, topFaceGradient}
        }

        let layout = sizeCanvas()

        const handleResize = () => {
            layout = sizeCanvas()
            drawMaze()
        }

        const drawMaze = () => {
            const {cellSize, topFaceGradient} = layout
            const gridWidthCells = Math.ceil(canvas.width / cellSize) * GRID_CELL_MULTIPLIER
            const gridHeightCells = Math.ceil(canvas.height / (cellSize * ISOMETRIC_HEIGHT_RATIO)) * GRID_CELL_MULTIPLIER
            const maxDistance = Math.sqrt(gridWidthCells * gridWidthCells + gridHeightCells * gridHeightCells)
            const canvasCenterX = canvas.width / 2
            const canvasCenterY = canvas.height / 2
            const drawMargin = ctx.lineWidth

            ctx.fillStyle = topFaceGradient

            for (let yIndex = -gridHeightCells; yIndex < gridHeightCells; yIndex++) {
                for (let xIndex = -gridWidthCells; xIndex < gridWidthCells; xIndex++) {
                    // Calculate isometric position
                    const deltaX = xIndex - yIndex
                    const deltaY = xIndex + yIndex
                    const posX = canvasCenterX + (deltaX * cellSize) / ISOMETRIC_X_FACTOR
                    const posY = canvasCenterY + (deltaY * cellSize) / ISOMETRIC_Y_FACTOR

                    // A cell reaches at most cellSize * 1.5 above posY (raised by up to cellSize) and cellSize / 2 below
                    const offCanvas = posX + cellSize + drawMargin < 0
                        || posX - drawMargin > canvas.width
                        || posY + cellSize / 2 + drawMargin < 0
                        || posY - cellSize * 1.5 - drawMargin > canvas.height
                    if (offCanvas) continue

                    // Calculate distance from center for animation effect
                    const distanceFromCenter = Math.sqrt(xIndex * xIndex + yIndex * yIndex)

                    // Calculate edge brightness factor (cells fade at edges)
                    const edgeFactor = 1 - distanceFromCenter / maxDistance

                    // Calculate cell height using sine wave for animation
                    const cellHeight = cellSize * edgeFactor * Math.abs(Math.sin(distanceFromCenter * WAVE_FREQUENCY + animationTime))

                    // Draw the top face of the cell (main colored surface)
                    ctx.beginPath()
                    ctx.moveTo(posX, posY - cellHeight)
                    ctx.lineTo(posX + cellSize / 2, posY - cellSize / 2 - cellHeight)
                    ctx.lineTo(posX + cellSize, posY - cellHeight)
                    ctx.lineTo(posX + cellSize, posY)
                    ctx.lineTo(posX + cellSize / 2, posY + cellSize / 2)
                    ctx.lineTo(posX, posY)
                    ctx.closePath()

                    // The shared unit gradient runs from (0, 0) to (1, 0). This rotation-and-scale maps that
                    // segment onto the cube's top-left to bottom-right corners, which keeps the gradient's
                    // colour bands perpendicular to it (a non-uniform scale would skew them). The path is
                    // already in canvas coordinates, so the transform only affects the fill.
                    ctx.setTransform(cellSize, cellHeight, -cellHeight, cellSize, posX, posY - cellHeight)
                    ctx.fill()
                    ctx.resetTransform()

                    // Add outline for additional neon effect
                    ctx.strokeStyle = NEON_YELLOW
                    ctx.stroke()

                    // Draw vertical lines to enhance 3D effect
                    ctx.beginPath()
                    ctx.moveTo(posX, posY)
                    ctx.lineTo(posX, posY - cellHeight)
                    ctx.moveTo(posX + cellSize, posY)
                    ctx.lineTo(posX + cellSize, posY - cellHeight)
                    ctx.moveTo(posX + cellSize / 2, posY + cellSize / 2)
                    ctx.lineTo(posX + cellSize / 2, posY - cellSize / 2 - cellHeight)
                    ctx.strokeStyle = VERTICAL_LINES_COLOR
                    ctx.stroke()
                }
            }
        }

        const animate = (frameTime: DOMHighResTimeStamp) => {
            const deltaSeconds = (frameTime - lastFrameTime) / 1000
            lastFrameTime = frameTime
            animationTime += deltaSeconds * ANIMATION_SPEED

            // Fade the previous frame by the same amount per second regardless of frame rate
            const fadeAlpha = 1 - (1 - BACKGROUND_FADE_PER_REFERENCE_FRAME) ** (deltaSeconds * REFERENCE_FRAME_RATE)
            ctx.fillStyle = `rgba(0,0,0,${fadeAlpha})`
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            drawMaze()
            animationFrameId = requestAnimationFrame(animate)
        }

        const startAnimation = () => {
            if (running || disposed) return
            running = true
            lastFrameTime = performance.now()
            animationFrameId = requestAnimationFrame(animate)
        }

        const stopAnimation = () => {
            running = false
            cancelAnimationFrame(animationFrameId)
        }

        const syncAnimationToVisibility = () => {
            if (canvasOnScreen && document.visibilityState === "visible") {
                startAnimation()
            } else {
                stopAnimation()
            }
        }

        const observer = new IntersectionObserver((entries) => {
            canvasOnScreen = entries[entries.length - 1].isIntersecting
            syncAnimationToVisibility()
        })
        observer.observe(canvas)
        document.addEventListener("visibilitychange", syncAnimationToVisibility)
        window.addEventListener("resize", handleResize)
        drawMaze()

        return () => {
            disposed = true
            observer.disconnect()
            document.removeEventListener("visibilitychange", syncAnimationToVisibility)
            window.removeEventListener("resize", handleResize)
            stopAnimation()
        }
    }, [height, width])

    return (
        <canvas ref={canvasRef} className="block w-full"/>
    )
}

export default NeonIsometricMaze
