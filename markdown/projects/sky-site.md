# Sky Quest Tracker

I made this website for a game that I play where tracking the quests online manually was a bit cumbersome. So I
developed a website specifically to manage it myself with a nicer UI.

Developed with Nextjs due to ease of development and deployment. The main focus of this app was making a satisfying user
experience. The UI itself is very simple. I only designed it track quests, so there isn't any bloat. Everything is
smoothly animated, satisfying and, most importantly, mobile friendly. As the main player base for this game plays on
mobile.

For added convenience, since the dailies are the same each day for each player I implemented a simple Redis cache which
tracks the most selected quest each day and these most selected quests are the ones which will be selected by default.
This simple and cheap feature removes the need for the user to even search a quest if only one player selects the
correct daily quests.