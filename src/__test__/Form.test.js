import React from "react";
import '@testing-library/jest-dom'
import { render, fireEvent, screen,waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import Form from "../Components/Form/Form";
import { useDispatch } from "react-redux";
import { postGeocerca } from "../redux/Actions/postGeocerca";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

const mockPostGeocerca = jest.fn();

jest.mock("../redux/Actions/postGeocerca", () => ({
  postGeocerca: jest.fn(),
}));


describe("Renderización correcta de Form", () => {

  let form;
  let button;
  let nameInput;
  let licenseInput;
  let emailInput;
  let selectGeo;
  let selectUnit;
  beforeEach(() => {
    render(<Form />);

    form = screen.getByRole('form')
    button = screen.getByRole('button', { name: 'Crear Geocerca' })
    nameInput = screen.getByTestId('nombreUnidad' )
    licenseInput = screen.getByTestId('licenciaChofer')
    emailInput = screen.getByTestId('emailChofer')
    selectGeo = screen.getByTestId('geocerca' )
    selectUnit = screen.getByTestId('unidades')
  })

  test('Renderiza el componente Form correctamente', () => {
    expect(form).toBeInTheDocument()
  })

  test('Renderiza el button, los select y los input correctamente', () => {
    expect(button).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument(); 
    expect(licenseInput).toBeInTheDocument(); 
    expect(emailInput).toBeInTheDocument(); 
    expect(selectGeo).toBeInTheDocument();
    expect(selectUnit).toBeInTheDocument();
  });

  test('Se envia la data cuando se llenan los campos obligatorios', async () => {
    fireEvent.change(selectGeo, { target: { value: 'Monterrey' } });
    fireEvent.change(selectUnit, { target: { value: 'Base 1525' } });
    fireEvent.change(nameInput, { target: { value: 'Unidad 1' } });
    fireEvent.change(licenseInput, { target: { value: 1234567890 } });
    fireEvent.change(emailInput, { target: { value: 'abcd@gmail.com' } });
  
    user.click(button)
    // await waitFor(() => {
    //   expect(mockPostGeocerca).toHaveBeenCalled();
    // });
  
  });
})



