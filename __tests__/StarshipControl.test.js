import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";

import Starship from "../components/Starship";

test("change name", async () => {
  const handleChange = render(<Starship />);

  expect(handleChange("")).toBe("New Name");
});
