"use client"

import type React from "react"
import {useEffect, useRef} from "react"

// Grid and cell configuration
const CELL_SIZE_DIVISOR = 8 // Controls the overall size of cells
const GRID_CELL_MULTIPLIER = 2 // Extends the grid beyond visible canvas
const ISOMETRIC_HEIGHT_RATIO = 0.5 // Controls the isometric height proportion
const ISOMETRIC_X_FACTOR = 2 // Divisor for X coordinate calculation in isometric projection
const ISOMETRIC_Y_FACTOR = 4 // Divisor for Y coordinate calculation in isometric projection

// Animation configuration
const ANIMATION_SPEED = 0.05 // Controls how fast the animation cycles
const WAVE_FREQUENCY = 0.5 // Controls the frequency of the sine wave

// Visual styling
const NEON_CYAN = "rgba(0,255,255,.8)"
const NEON_MAGENTA = "rgba(255,0,255,.8)"
const NEON_YELLOW = "rgba(255,255,0,.5)"
const VERTICAL_LINES_COLOR = "rgba(255,255,255,.3)"
const BACKGROUND_FADE_COLOR = "rgba(0,0,0,.1)"

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
        let animationFrameId: number

        const handleResize = () => {
            if (!canvas) return
            canvas.width = width ?? window.innerWidth
            canvas.height = height ?? window.innerHeight
            drawMaze()
        }

        const drawMaze = () => {
            if (!canvas || !ctx) return

            // Calculate grid size and cell dimensions
            const cellSize = Math.min(canvas.width, canvas.height) / CELL_SIZE_DIVISOR
            const gridWidthCells = Math.ceil(canvas.width / cellSize) * GRID_CELL_MULTIPLIER
            const gridHeightCells = Math.ceil(canvas.height / (cellSize * ISOMETRIC_HEIGHT_RATIO)) * GRID_CELL_MULTIPLIER
            const canvasCenterX = canvas.width / 2
            const canvasCenterY = canvas.height / 2

            // Loop through each cell in the grid
            for (let yIndex = -gridHeightCells; yIndex < gridHeightCells; yIndex++) {
                for (let xIndex = -gridWidthCells; xIndex < gridWidthCells; xIndex++) {
                    // Calculate isometric position
                    const deltaX = xIndex - yIndex
                    const deltaY = xIndex + yIndex
                    const posX = canvasCenterX + (deltaX * cellSize) / ISOMETRIC_X_FACTOR
                    const posY = canvasCenterY + (deltaY * cellSize) / ISOMETRIC_Y_FACTOR

                    // Calculate distance from center for animation effect
                    const distanceFromCenter = Math.sqrt(xIndex * xIndex + yIndex * yIndex)
                    const maxDistance = Math.sqrt(gridWidthCells * gridWidthCells + gridHeightCells * gridHeightCells)

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

                    // Create and apply cyan-to-magenta gradient for neon effect
                    const gradient = ctx.createLinearGradient(posX, posY - cellHeight, posX + cellSize, posY)
                    gradient.addColorStop(0, NEON_CYAN)
                    gradient.addColorStop(1, NEON_MAGENTA)
                    ctx.fillStyle = gradient
                    ctx.fill()

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

        /**
         * Animation loop function
         */
        const animate = () => {
            if (!canvas || !ctx) return

            // Add slight fade effect by drawing semi-transparent black rectangle
            ctx.fillStyle = BACKGROUND_FADE_COLOR
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // Draw the maze and update animation time
            drawMaze()
            animationTime += ANIMATION_SPEED

            // Continue animation loop
            animationFrameId = requestAnimationFrame(animate)
        }

        // Set up event listeners and start animation
        window.addEventListener("resize", handleResize)
        handleResize()
        animate()

        // Clean up on component unmount
        return () => {
            window.removeEventListener("resize", handleResize)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas ref={canvasRef} className="block w-full"/>
    )
}

export default NeonIsometricMaze
