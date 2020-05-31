import React from "react";
import Header from "../../components/Header";
import { mount } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import HamburgerMenu from "../../components/HamburgerMenu";

describe("Header Component Testing", () => {
  const header = mount(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  const hamburgerMenu = mount(
    <BrowserRouter>
      <HamburgerMenu />
    </BrowserRouter>
  );

  test("Header Render", () => {
    expect(header.length).toEqual(1);
  });

  test("Header Logo Render", () => {
    expect(header.find(".Header-logo").length).toEqual(1);
  });

  test("Header Icons and Links Render", () => {
    expect(header.find(".Header-icons").length).toEqual(8);
  });

  test("Hamburger Menu Availability", () => {
    expect(hamburgerMenu.length).toEqual(1);
  });
});
