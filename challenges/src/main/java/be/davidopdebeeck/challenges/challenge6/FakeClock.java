package be.davidopdebeeck.challenges.challenge6;

import java.time.LocalDate;

public class FakeClock implements Clock {

  @Override
  public LocalDate getLocalDate() {
    return LocalDate.of(1994, 12, 13);
  }
}
