import React from "react";
import { render, screen } from "@testing-library/react";
import Albums from '../../../../src/pages/albums/components/Albums'
import { getAlbums } from "../../../../src/pages/albums/services/AlbumsService";

describe('Test unitarios para la vista de Albums', () => {
    test('No deberia estar renderizada la tabla cuando la data esta vacia', () => {
        render(<Albums />)
        expect(screen.queryByRole("table")).toBeNull();
    });

    test('El EmptyState se deberia mostrar correctamente cuando no hay data', () => {
        render(<Albums />);
        expect(screen.getByText(/Vacio/i)).not.toBeNull();
    });

    test('La tabla de renderizar correctamente en las filas los registros cuando la data es consultada y es correcta', () => {
        const mockData = [{ userId: 1, id: 2, title: "" }];
        jest.spyOn(React, "useState").mockImplementationOnce(() => [mockData, jest.fn()]);
        render(<Albums />);
        expect(screen.getByText("1")).not.toBeNull();
        expect(screen.getByText("2")).not.toBeNull();
    });
});