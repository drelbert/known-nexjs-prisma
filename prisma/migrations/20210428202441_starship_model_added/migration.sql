-- CreateTable
CREATE TABLE "Starship" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "manufacturer" TEXT NOT NULL,
    "crew" INTEGER NOT NULL,
    "passengers" INTEGER NOT NULL,
    "starshipClass" TEXT NOT NULL,
    "pilots" TEXT[],
    "ready" BOOLEAN NOT NULL,
    "launched" BOOLEAN NOT NULL,

    PRIMARY KEY ("id")
);
