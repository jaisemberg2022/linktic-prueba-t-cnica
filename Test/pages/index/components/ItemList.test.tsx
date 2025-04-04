import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ItemList, { StyledCard } from "../../../../src/pages/index/components/ItemList";
import IndexPage from "../../../../src/pages/index/components/IndexPage";

describe('Test unitarios para el componenten ItemList', () => {
    test('Deben aplicarse los estilos personalizados cuando se aplique el efecto de hover en el componente', () => {
        render(
            <MemoryRouter>
                <ItemList image="test.jpg" rute="home" description="Test description" />
            </MemoryRouter>
        );
        const card = screen.getByRole('img');
        fireEvent.mouseOver(card);
    });

    test('Debe redireccionar a una ruta cuando se hace "click" a el boton del fondo', () => {
        const mockProps = {
            image: 'test-image.jpg',
            rute: 'Albums',
            description: 'Test Description',
        };

        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<ItemList {...mockProps} />} />
                    <Route path="/Albums" element={<div>Albums Page</div>} />
                </Routes>
            </MemoryRouter>
        );
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(screen.getByText(/Albums Page/i)).not.toBeNull()
    });

    test('Debe mostrar la imagen, ruta y descripción correctamente', () => {
        const mockProps = {
            image: 'test-image.jpg',
            rute: 'Test Route',
            description: 'Test Description',
        };
        render(
            <MemoryRouter>
                <ItemList {...mockProps} />
            </MemoryRouter>
        );
        const img = screen.getByRole('img');
        const title = screen.getByText(/Test Route/i);
        const description = screen.getByText(/Test Description/i);

        expect(img).toHaveProperty('src', 'http://localhost/test-image.jpg');
        expect(title).toBeTruthy();
        expect(description).toBeTruthy();
    });
});