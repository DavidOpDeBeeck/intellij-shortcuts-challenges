package be.davidopdebeeck.challenges.challenge17;

public class Calculator {

  private final int left;
  private final int right;

  public Calculator(int left, int right) {
    this.left = left;
    this.right = right;
  }

  public int sum() {
    return left + right;
  }

  public int product() {
    return left * right;
  }

  public int divided() {
    return left / right;
  }
}
