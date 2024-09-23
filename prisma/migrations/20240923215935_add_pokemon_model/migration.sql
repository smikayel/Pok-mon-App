-- CreateTable
CREATE TABLE "Pokemon" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "hp" INTEGER NOT NULL,
    "attack" INTEGER NOT NULL,
    "defense" INTEGER NOT NULL,
    "speed" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "isGuessed" BOOLEAN NOT NULL,

    CONSTRAINT "Pokemon_pkey" PRIMARY KEY ("id")
);
