//
// Copyright (c) 2021 Tan Shuai <opensource@tanshuai.com>, All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for details.
// Free technical support service may be available to non-profit open source projects.
//

/// <reference path="cypress" />
/// <reference path="../support/index.d.ts" />

describe('CypressFileInputTrigger', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8080')
    }),
    it('.trigger() - Uplaod File and Trigger Vue Method', () => {
        
      cy.get("[data-cy='file-input']").attachFile('example.json').trigger('input')
      
  })
}
)