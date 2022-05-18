package be.davidopdebeeck.challenges.challenge2;

import static be.davidopdebeeck.challenges.common.FaceBuilder.face;

public class Challenge2 {

  public static void indentMeProperlyPlease() {
    System.out.println(face().withEyes(1).withColor("blue").withNosewidth(500).build());
  }

  public static void indentedItShouldLookLikeThis() {
    System.out.println(face()
      .withEyes(1)
      .withColor("blue")
      .withNosewidth(500)
      .build());
  }
}
