package be.davidopdebeeck.challenges.challenge6;

public class ClockFactory {

  public static Clock createClock() {
    return new RealClock();
  }
}
