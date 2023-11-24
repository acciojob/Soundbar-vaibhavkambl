//your JS code here. If required.
function expectPlayingAudio() {
  cy.get('audio,video').should('have.prop', 'paused', false);
}

// Add this helper function to wait for audio to be ready
function waitForAudioToBeReady() {
  return new Promise((resolve) => {
    cy.get('audio,video').on('canplay', () => {
      resolve();
    });
  });
}

// Modify your test cases
it("Test sound 1", () => {
  cy.visit(baseUrl + "/main.html");
  cy.get(".btn").first().click();
  // Wait for audio to be ready
  waitForAudioToBeReady().then(() => {
    expectPlayingAudio();
  });
});

it("Test sound 2", () => {
  cy.visit(baseUrl + "/main.html");
  cy.get(".btn").eq(1).click();
  // Wait for audio to be ready
  waitForAudioToBeReady().then(() => {
    expectPlayingAudio();
  });
});

// Repeat for other test cases...
