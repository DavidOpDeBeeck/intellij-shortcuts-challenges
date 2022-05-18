package be.davidopdebeeck.challenges.challenge6;

import java.time.LocalDate;

public class RealClock implements Clock {

  @Override
  public LocalDate getLocalDate() {
    return LocalDate.now();
  }
}
