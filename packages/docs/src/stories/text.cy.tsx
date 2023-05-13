import { Text } from '@rubensdeoliveira-ui/react'

describe('Text', () => {
  it('Default', () => {
    cy.mount(<Text>hello world!</Text>)

    cy.get('span').should('have.text', 'hello world!')
  })

  it('ClassName', () => {
    cy.mount(<Text className="bg-red-500">hello world!</Text>)

    cy.get('span').should('have.class', 'bg-red-500')
  })

  it('FontSize', () => {
    cy.mount(<Text fontSize={'32'}>hello world!</Text>)

    cy.get('span').should('have.class', 'text-[2rem]')
  })

  it('FontSizeResponsive', () => {
    cy.mount(<Text fontSize={['16', '32', '48']}>hello world!</Text>)

    cy.get('span')
      .should('have.class', 'text-[1rem]')
      .and('have.class', 'md:text-[2rem]')
      .and('have.class', 'lg:text-[3rem]')
  })

  it('FontWeight', () => {
    cy.mount(<Text fontWeight={'600'}>hello world!</Text>)

    cy.get('span').should('have.class', 'font-[600]')
  })

  it('FontWeightResponsive', () => {
    cy.mount(<Text fontWeight={['400', '500', '600']}>hello world!</Text>)

    cy.get('span')
      .should('have.class', 'font-[400]')
      .and('have.class', 'md:font-[500]')
      .and('have.class', 'lg:font-[600]')
  })

  it('MarginTop', () => {
    cy.mount(<Text marginTop={'32'}>hello world!</Text>)

    cy.get('span').should('have.class', 'mt-[2rem]')
  })

  it('MarginTopResponsive', () => {
    cy.mount(<Text marginTop={['32', '64', '96']}>hello world!</Text>)

    cy.get('span')
      .should('have.class', 'mt-[2rem]')
      .and('have.class', 'md:mt-[4rem]')
      .and('have.class', 'lg:mt-[6rem]')
  })

  it('MarginBottom', () => {
    cy.mount(<Text marginBottom={'32'}>hello world!</Text>)

    cy.get('span').should('have.class', 'mb-[2rem]')
  })

  it('MarginBottomResponsive', () => {
    cy.mount(<Text marginBottom={['32', '64', '96']}>hello world!</Text>)

    cy.get('span')
      .should('have.class', 'mb-[2rem]')
      .and('have.class', 'md:mb-[4rem]')
      .and('have.class', 'lg:mb-[6rem]')
  })

  it('As span', () => {
    cy.mount(<Text as="span">hello world!</Text>)
    cy.get('span').should('have.text', 'hello world!')
  })

  it('As h1', () => {
    cy.mount(<Text as="h1">hello world!</Text>)
    cy.get('h1').should('have.text', 'hello world!')
  })

  it('As h2', () => {
    cy.mount(<Text as="h2">hello world!</Text>)
    cy.get('h2').should('have.text', 'hello world!')
  })

  it('As h3', () => {
    cy.mount(<Text as="h3">hello world!</Text>)
    cy.get('h3').should('have.text', 'hello world!')
  })

  it('As h4', () => {
    cy.mount(<Text as="h4">hello world!</Text>)
    cy.get('h4').should('have.text', 'hello world!')
  })

  it('As h5', () => {
    cy.mount(<Text as="h5">hello world!</Text>)
    cy.get('h5').should('have.text', 'hello world!')
  })

  it('As h6', () => {
    cy.mount(<Text as="h6">hello world!</Text>)
    cy.get('h6').should('have.text', 'hello world!')
  })

  it('As p', () => {
    cy.mount(<Text as="p">hello world!</Text>)
    cy.get('p').should('have.text', 'hello world!')
  })
})
