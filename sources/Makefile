##
## Makefile for vvgl in /home/aracthor/programs/projects/vvgl/sources
## 
## Made by aracthor
## Login   <aracthor@epitech.net>
## 
## Started on  Sat Apr 11 09:31:12 2015 aracthor
## Last Update Sat May  2 16:06:20 2015 aracthor
##

CC=		cat

# Lib made
NAME=		sfhl
FILENAME=	lib$(NAME).js
LIBPATH=	../
LIBFILE=	$(LIBPATH)$(FILENAME)

SRCS=	namespace.js			\
	KeyCode.js			\
	MouseButton.js			\
	Vector.js			\
	Clock.js			\
	Color.js			\
	Drawable.js			\
	EventsHandler.js		\
	EventsManager.js		\
	Keyboard.js			\
	KeyEventListener.js		\
	LineCap.js			\
	Line.js				\
	Mouse.js			\
	MouseMovementListener.js	\
	Rectangle.js			\
	SceneNode.js			\
	Sprite.js			\
	Text.js				\
	Texture.js			\
	Application.js



$(LIBFILE):	$(SRCS)
		$(CC) $(SRCS) > $(LIBFILE)

all:		$(LIBFILE)

clean:

fclean:		clean
		$(RM) $(LIBFILE)

re:		fclean all
