import { it, expect, describe, vi, beforeEach } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter, useLocation } from "react-router";
import { PaymentSummary } from "./PaymentSummary";
import userEvent from "@testing-library/user-event";
import axios from "axios";

vi.mock("axios");

describe("Payment Summary", () => {
  let loadCart, paymentSymmary, user;

  beforeEach(() => {
    loadCart = vi.fn();

    user = userEvent.setup();

    paymentSymmary = {
      totalItems: 3,
      productCostCents: 4275,
      shippingCostCents: 499,
      totalCostBeforeTaxCents: 4774,
      taxCents: 477,
      totalCostCents: 5251,
    };
  });

  it("Display payment summary", () => {
    render(
      <MemoryRouter>
        <PaymentSummary paymentSummary={paymentSymmary} loadCart={loadCart} />
      </MemoryRouter>,
    );

    expect(screen.getByText("Items (3):")).toBeInTheDocument();

    // There are multiple ways to check the text inside an element.
    // 1. within() + getByText() + toBeInTheDocument()
    expect(
      within(screen.getByTestId("payment-summary-product-cost")).getByText(
        "$42.75",
      ),
    ).toBeInTheDocument();

    // 2. getByTestId() + toHaveTextContent()
    // (toHaveTextContent() checks the text inside an element)
    // This solution is a little cleaner in this case.
    expect(
      screen.getByTestId("payment-summary-shipping-cost"),
    ).toHaveTextContent("$4.99");

    expect(
      screen.getByTestId("payment-summary-total-before-tax"),
    ).toHaveTextContent("$47.74");

    expect(screen.getByTestId("payment-summary-tax")).toHaveTextContent(
      "$4.77",
    );

    expect(screen.getByTestId("payment-summary-total")).toHaveTextContent(
      "$52.51",
    );
  });

  it("Place an order", async () => {
    function Location() {
      const location = useLocation();
      return <div data-testid="url-path">{location.pathname}</div>;
    }
    render(
      <MemoryRouter>
        <PaymentSummary paymentSummary={paymentSymmary} loadCart={loadCart} />
        <Location />
      </MemoryRouter>,
    );

    const palceOrderButton = screen.getByTestId("palce-order-button");
    await user.click(palceOrderButton);

    expect(axios.post).toHaveBeenCalledWith("/api/orders");
    expect(loadCart).toHaveBeenCalled();
    expect(screen.getByTestId('url-path')).toHaveTextContent("/orders");
  });
});
