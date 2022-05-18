package be.davidopdebeeck.challenges.common;

public class Face {

    private int eyes;
    private String color;
    private int noseWidth;

    public Face(int eyes, String color, int noseWidth) {
        this.eyes = eyes;
        this.color = color;
        this.noseWidth = noseWidth;
    }

    public int getEyes() {
        return eyes;
    }

    public String getColor() {
        return color;
    }

    public int getNoseWidth() {
        return noseWidth;
    }
}
