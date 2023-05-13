import { Button } from '@rubensdeoliveira-ui/react'

describe('Button', () => {
  it('Should Button.Root render children', () => {
    cy.mount(<Button.Root>children</Button.Root>)

    cy.get('button').should('have.text', 'children')
  })

  it('Should Button.Text render text', () => {
    cy.mount(<Button.Text>Enviar</Button.Text>)

    cy.get('span').should('have.text', 'Enviar')
  })

  it('Should Button.Icon render icon', () => {
    cy.mount(<Button.Icon name="AcademicCapIcon" />)

    cy.get('[data-cy="icon-AcademicCapIcon"]')
  })

  it('Should render button with text and icon', () => {
    cy.mount(
      <Button.Root>
        <Button.Text>Enviar</Button.Text>
        <Button.Icon name="AcademicCapIcon" />
      </Button.Root>
    )

    cy.get('button').children().should('have.length', 2)
    cy.get('span').should('have.text', 'Enviar')
    cy.get('[data-cy="icon-AcademicCapIcon"]')
  })

  it('Is Loading', () => {
    cy.mount(
      <Button.Root isLoading={true}>
        <Button.Text>Enviar</Button.Text>
        <Button.Icon name="AcademicCapIcon" />
      </Button.Root>
    )

    cy.get('button').children().should('have.length', 1)
    cy.get('svg')
      .should('have.class', 'inline')
      .and('have.class', 'w-4')
      .and('have.class', 'h-4')
      .and('have.class', 'mr-3')
      .and('have.class', 'text-white')
      .and('have.class', 'animate-spin')
    cy.get('button').should('have.attr', 'disabled')
  })

  it('Is Disabled', () => {
    cy.mount(
      <Button.Root disabled={true}>
        <Button.Text>Enviar</Button.Text>
        <Button.Icon name="AcademicCapIcon" />
      </Button.Root>
    )

    cy.get('button').should('have.attr', 'disabled')
    cy.get('button').should('have.class', 'disabled:opacity-60')
  })

  it('ClassName', () => {
    cy.mount(
      <Button.Root className="bg-red-300">
        <Button.Text className="bg-red-400">Enviar</Button.Text>
        <Button.Icon name="AcademicCapIcon" className="bg-red-500" />
      </Button.Root>
    )

    cy.get('button').should('have.class', 'bg-red-300')
    cy.get('span').should('have.class', 'bg-red-400')
    cy.get('[data-cy="icon-AcademicCapIcon"]').should(
      'have.class',
      'bg-red-500'
    )
  })

  it('PaddingHorizontal', () => {
    cy.mount(
      <Button.Root paddingHorizontal="32">
        <Button.Text>Enviar</Button.Text>
      </Button.Root>
    )

    cy.get('button').should('have.class', 'px-[2rem]')
  })

  it('PaddingHorizontalResponsive', () => {
    cy.mount(
      <Button.Root paddingHorizontal={['32', '64', '96']}>
        <Button.Text>Enviar</Button.Text>
      </Button.Root>
    )

    cy.get('button')
      .should('have.class', 'px-[2rem]')
      .and('have.class', 'md:px-[4rem]')
      .and('have.class', 'lg:px-[6rem]')
  })

  it('PaddingVertical', () => {
    cy.mount(
      <Button.Root paddingVertical="32">
        <Button.Text>Enviar</Button.Text>
      </Button.Root>
    )

    cy.get('button').should('have.class', 'py-[2rem]')
  })

  it('PaddingVerticalResponsive', () => {
    cy.mount(
      <Button.Root paddingVertical={['32', '64', '96']}>
        <Button.Text>Enviar</Button.Text>
      </Button.Root>
    )

    cy.get('button')
      .should('have.class', 'py-[2rem]')
      .and('have.class', 'md:py-[4rem]')
      .and('have.class', 'lg:py-[6rem]')
  })
})
