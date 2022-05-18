package be.davidopdebeeck.challenges.common;

public class FaceBuilder {

  private int eyes;
  private String color;
  private int noseWidth;

  public static FaceBuilder face() {
    return new FaceBuilder();
  }

  private FaceBuilder() {
  }

  public Face build() {
    return new Face(eyes, color, noseWidth);
  }

  public FaceBuilder withEyes(int eyes) {
    this.eyes = eyes;
    return this;
  }

  public FaceBuilder withColor(String color) {
    this.color = color;
    return this;
  }

  public FaceBuilder withNosewidth(int nosewidth) {
    this.noseWidth = nosewidth;
    return this;
  }
}
