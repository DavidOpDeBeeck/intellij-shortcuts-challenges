package be.davidopdebeeck.challenges.challenge17;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;


class CalculatorTest {

  private final Calculator calculator = new Calculator(2, 3);

  @Test
  void sum() {
    assertEquals(calculator.sum(), 5);
  }

  @Test
  void product() {
  }
}
