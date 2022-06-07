cy.helpers = {
  sortPayload: (attributeOne, attributeTwo) => {
    const attributeA = attributeOne.name.toUpperCase();
    const attributeB = attributeTwo.name.toUpperCase();

    let comparison = 0;
    if (attributeA > attributeB) {
      comparison = 1;
    } else if (attributeA < attributeB) {
      comparison = -1;
    }
    return comparison;
  },
};
