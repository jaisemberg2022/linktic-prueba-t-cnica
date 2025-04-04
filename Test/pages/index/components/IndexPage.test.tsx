import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; 
import IndexPage from "../../../../src/pages/index/components/IndexPage";
import { RoutesName } from "../../../../src/pages/index/data/routesName";

describe("Pruebas unitarias para la vista de Index", () => {
  test("Debe renderizarse el contenedor de la cuadrícula correctamente", () => {
    const { container } = render(
      <MemoryRouter>
        <IndexPage />
      </MemoryRouter>
    ); 
    const gridElement = container.querySelector(".MuiGrid-container");
    const gridItemElement = container.querySelectorAll(".MuiPaper-elevation")
    expect(gridElement).not.toBeNull();
    expect(gridItemElement.length).toEqual( RoutesName.length)
  });
});