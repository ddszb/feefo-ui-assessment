import {render, screen} from "@testing-library/react";
import ContactCard from "./contact-card";

test('Contact card should have name', () => {
    render(<ContactCard name="John Smith" email="john.smith@feefo.com"/>);
    const nameElement = screen.getByText(/John Smith/i);
    expect(nameElement).toBeInTheDocument();
});

test('Contact card should have email', () => {
    render(<ContactCard name="John Smith" email="john.smith@feefo.com"/>);
    const nameElement = screen.getByText(/john.smith@feefo.com/i);
    expect(nameElement).toBeInTheDocument();
});
