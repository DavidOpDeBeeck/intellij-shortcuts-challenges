import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <section class="flex flex-col space-y-8 justify-center items-center md:w-full lg:w-6/12 xl:w-4/12 m-auto p-4">
      <h1 class="text-6xl p-8">IntelliJ shortcuts challenges</h1>
      <h2 class="text-2xl font-semibold uppercase">Basics</h2>
      <ul class="w-full space-y-2">
        <li>
          <app-challenge [number]="1" shortcut="ctrl+c & ctrl+v">
            Create a new constructor by copying the existing
            one with only a text parameter.
          </app-challenge>
        </li>
        <li>
          <app-challenge [number]="1" shortcut="ctrl+c & ctrl+v">
            Undo the creation of the constructor.
          </app-challenge>
        </li>
        <li>
          <app-challenge [number]="1" shortcut="ctrl+shift+z">
            Redo the creation of the constructor.
          </app-challenge>
        </li>
        <li>
          <app-challenge [number]="2" shortcut="tab & shift+tab">
            Manually indent the <code>indentMeProperlyPlease()</code> method.
          </app-challenge>
        </li>
        <li>
          <app-challenge [number]="3" shortcut="ctrl+alt+l">
            Automatically indent the <code>indentMeProperlyPlease()</code> method.
          </app-challenge>
        </li>
        <li>
          <app-challenge [number]="4" shortcut="ctrl+alt+o">
            Automatically remove the unused imports.
          </app-challenge>
        </li>
      </ul>
      <h2 class="text-2xl font-semibold uppercase">Navigation</h2>
      <ul class="w-full space-y-2">
        <li>
          <app-challenge [number]="5" shortcut="ctrl+right & ctrl+left">
            Put your cursor in front of the string <code>"The"</code>. Now put your cursor behind each word in the
            string from left to right and do the same thing in reverse.
          </app-challenge>
        </li>
        <li>
          <app-challenge [number]="5" shortcut="ctrl+right & ctrl+left">
            Put your cursor at the start of the <code>theQuickBrownFoxJumpedOverTheLazyCamel()</code> method name and
            put your cursor behind each word in the method name from left to right and do the same thing in reverse.
          </app-challenge>
        </li>
        <li>
          <app-challenge [number]="5" shortcut="home">
            Go to the begin of the line.
          </app-challenge>
        </li>
        <li>
          <app-challenge [number]="5" shortcut="end">
            Go to the end of the line.
          </app-challenge>
        </li>
        <li>
          <app-challenge [number]="5" shortcut="ctrl+home">
            Go to the begin of the file.
          </app-challenge>
        </li>
        <li>
          <app-challenge [number]="5" shortcut="ctrl+end">
            Go to the end of the file.
          </app-challenge>
        </li>
        <li>
          <app-challenge [number]="6" shortcut="ctrl+alt+b & ctrl+alt+h">
            Use the <code>getLocalDate()</code> method to jump the to different implementations.
          </app-challenge>
        </li>
        <li>
          <app-challenge [number]="6" shortcut="ctrl+b & ctrl+alt+h">
            Use the <code>getLocalDate()</code> method in the <code>Clock</code> interface and jump to the usages.
          </app-challenge>
        </li>
        <li>
          <app-challenge [number]="6" shortcut="ctrl+alt+left & ctrl+alt+right">
            Use the history to move between the different classes.
          </app-challenge>
        </li>
        <li>
          <app-challenge [number]="7" shortcut="F2">
            Jump to the first error and fix the method so it returns a string.
          </app-challenge>
        </li>
        <li>
          <app-challenge [number]="7" shortcut="ctrl+shift+backspace">
            Put your cursor at the start of the line and jump to the last edit position.
          </app-challenge>
        </li>
        <li>
          <app-challenge [number]="8">
            Use the following stacktrace
            <pre class="text-gray-600 text-[0.6em] py-2">Exception in thread "main" java.lang.NullPointerException: Cannot invoke "String.equals(Object)" because "left" is null
\tat be.davidopdebeeck.challenges.challenge8.Challenge8.main(Challenge8.java:9)</pre>
          </app-challenge>
        </li>
        <li>
          <app-challenge [number]="8" shortcut="ctrl+g">
            Manually jump to the line of the exception.
          </app-challenge>
        </li>
        <li>
          <app-challenge [number]="8" shortcut="alt+c+s+enter">
            Automatically analyse the stacktrace and go to the same line.
          </app-challenge>
        </li>
        <li>
          <app-challenge [number]="9" shortcut="ctrl+F12">
            List all the methods.
          </app-challenge>
        </li>
      </ul>
      <h2 class="text-2xl font-semibold uppercase">Selection</h2>
      <ul class="w-full space-y-2">
        <li>
          <app-challenge [number]="10" shortcut="ctrl+shift+right">
            Put your cursor in front of the first string, then select the first 3 words and past them in the string on
            the second line.
          </app-challenge>
        </li>
        <li>
          <app-challenge [number]="10" shortcut="ctrl+w">
            Put your cursor in front of the string on the second line and select the whole string.
          </app-challenge>
        </li>
      </ul>
      <h2 class="text-2xl font-semibold uppercase">Line Editing</h2>
      <ul class="w-full space-y-2">
        <li>
          <app-challenge [number]="11" shortcut="ctrl+d">
            Duplicate the first comment line a few times.
          </app-challenge>
        </li>
        <li>
          <app-challenge [number]="11" shortcut="ctrl+y">
            Delete all the comment lines (line per line).
          </app-challenge>
        <li>
        <li>
          <app-challenge [number]="11" shortcut="ctrl+shift+up& ctrl+shift+down">
            Reorder the first and second method.
          </app-challenge>
        </li>
        <li>
          <app-challenge [number]="11" shortcut="ctrl+shift+enter">
            Put your cursor in front of the <code>thirdMethod()</code> method and create a new line in the method.
          </app-challenge>
        </li>
        <li>
          <app-challenge [number]="11" shortcut="ctrl+shift+j">
            Put all the lines from the <code>fourthMethod()</code> method on the same line.
          </app-challenge>
        </li>
      </ul>
      <h2 class="text-2xl font-semibold uppercase">Embedded Windows</h2>
      <ul class="w-full space-y-2">
        <li>
          <app-challenge [number]="12" shortcut="alt+right & alt+left">
            Switch between the different open tabs.
          </app-challenge>
        </li>
        <li>
          <app-challenge [number]="12" shortcut="shift+shift & ctrl+shift+a & ctrl+shift+n & ctrl+shift+f">
            Open the different search windows ("Find Actions", "Find Classes", "Find Files", ...)
          </app-challenge>
        </li>
        <li>
          <app-challenge [number]="12" shortcut="alt+1...9">
            Open the different tool windows: <code>Project</code>, <code>Git</code>, ...
          </app-challenge>
        </li>
      </ul>
      <h2 class="text-2xl font-semibold uppercase">IntelliJ's Suggestions</h2>
      <ul class="w-full space-y-2">
        <li>
          <app-challenge [number]="13" shortcut="ctrl+shift+enter">
            Try to automatically fix the mistakes using auto-correct.
          </app-challenge>
        </li>
        <li>
          <app-challenge [number]="14" shortcut="ctrl+space & ctrl+shift+space">
            Try to automatically fix the mistakes using auto-complete.
          </app-challenge>
        </li>
        <li>
          <app-challenge [number]="14" shortcut="ctrl+q">
            Show the javadoc for the constructor.
          </app-challenge>
        </li>
        <li>
          <app-challenge [number]="14" shortcut="ctrl+p">
            Show the parameter type for the constructor.
          </app-challenge>
        </li>
        <li>
          <app-challenge [number]="15" shortcut="alt+insert">
            Create a new package and class.
          </app-challenge>
        </li>
        <li>
          <app-challenge [number]="15" shortcut="alt+delete">
            Safely delete the newly created class.
          </app-challenge>
        </li>
        <li>
          <app-challenge [number]="16" shortcut="ctrl+shift+alt+insert">
            Create a new <code>JSON</code> scratch file.
          </app-challenge>
        </li>
      </ul>
      <h2 class="text-2xl font-semibold uppercase">Tests</h2>
      <ul class="w-full space-y-2">
        <li>
          <app-challenge [number]="17" shortcut="ctrl+shift+t">
            Open the <code>Calculator</code> class and navigate to its test.
          </app-challenge>
        </li>
        <li>
          <app-challenge [number]="17" shortcut="ctrl+shift+F10">
            Run all the tests.
          </app-challenge>
        </li>
        <li>
          <app-challenge [number]="17" shortcut="shift+F10">
            Add an assertion to the second test and rerun all the tests.
          </app-challenge>
        </li>
        <li>
          <app-challenge [number]="17" shortcut="ctrl+shift+F10">
            Only rerun the second tests.
          </app-challenge>
        </li>
        <li>
          <app-challenge [number]="17" shortcut="alt+insert">
            Create a new test for the <code>division()</code> method.
          </app-challenge>
        </li>
      </ul>
      <h2 class="text-2xl font-semibold uppercase">Refactorings</h2>
      <ul class="w-full space-y-2">
        <li>
          <app-challenge [number]="18" shortcut="ctrl+alt+c">
            Extract the first line to a constant.
          </app-challenge>
        </li>
        <li>
          <app-challenge [number]="18" shortcut="ctrl+alt+f">
            Extract the second line to a field.
          </app-challenge>
        </li>
        <li>
          <app-challenge [number]="18" shortcut="ctrl+alt+p">
            Extract the third line to a parameter.
          </app-challenge>
        </li>
        <li>
          <app-challenge [number]="18" shortcut="ctrl+alt+m">
            Extract the fourth line to a method.
          </app-challenge>
        </li>
        <li>
          <app-challenge [number]="18" shortcut="ctrl+alt+n">
            Inline the fifth line.
          </app-challenge>
        </li>
      </ul>
      <h2 class="text-2xl font-semibold uppercase">Based on</h2>
      <a class="text-blue-600" href="https://github.com/Sch3lp/ProductivityWithShortcuts">https://github.com/Sch3lp/ProductivityWithShortcuts</a>
    </section>
  `
})
export class AppComponent {

}
