Feature: Widgets
  As a widget administrator
  I want to administer widgets
  In order to collect a paycheck

  Scenario: No widgets
    Given there are no widgets
    When I retrieve the list of widgets
    Then I should recieve an empty list
  
  Scenario: Create widget
    Given there are no widgets
    When I create a widget
    And I retrieve the list of widgets
    Then I should see the widget I created

  Scenario: Retrieve widget
    Given there is a widget
    When I retrieve the widget
    Then I should receive the widget

  Scenario: Update widget
    Given there is a widget
    When I update the widget
    And I retrieve the widget
    Then I should receive the updated widget

  Scenario: Delete widget
    Given there is a widget
    When I delete the widget
    And I retrieve the list of widgets
    Then I should not see the deleted widget

  Scenario: Multiple widgets
    Given there are several widgets
    When I retrieve the list of widgets
    Then I should see each of the several widgets
