import {render, screen} from "@testing-library/react";
import SalesBox from "./sales-box";

const mockSalesOverview = {
    uploads: 8,
    successfulUploads: 3,
    linesAttempted: 20,
    linesSaved: 4,
    lastUploadDate: 1605001226079,
};

test('Sales summary should show 8 uploads and 4 lines', () => {
    render(<SalesBox data={mockSalesOverview} />);
    expect(screen.getByText(
        (_, element) => element.textContent === 'You had 8 uploads and 4 lines added'))
        .toBeInTheDocument();
});

test('Success percentage should be at 38%', () => {
    render(<SalesBox data={mockSalesOverview} />);
    const linesText= screen.getByText(/38%/i);
    expect(linesText).toBeInTheDocument();
});

test('Success percentage should be at 20%', () => {
    render(<SalesBox data={mockSalesOverview} />);
    const linesText= screen.getByText(/20%/i);
    expect(linesText).toBeInTheDocument();
});

