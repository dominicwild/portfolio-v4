# Friend Cards Co-op

A site for finding online co-op games to play with friends. Picking a game for a group is oddly hard: store pages are
vague about how many people can play online, which platforms can play together and whether everyone needs to buy a copy.

You say how many of you there are and what each of you plays on, and the site only shows games your group can actually
play together. There are shelves for upcoming games, hidden gems, games you can play free together (free-to-play, demos,
Friend's Pass, giveaways) and "quiet co-op" games that work without voice chat.

Behind it is a nightly pipeline that gathers games from stores and game databases, then uses AI to check each new or
changed game really has online co-op. The AI only records facts it can quote from a source, so you can hover over any
fact to see where it came from.

Built with Next.js as a fully static site on Vercel, with every game stored as its own JSON file and checked with Zod.
