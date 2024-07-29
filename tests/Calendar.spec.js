const {test,expect} = require("@playwright/test");
const { CalendarPage } = require("../Pages/CalendarPage");

test("Calendar validations", async({page}) =>
{
    const monthNumber = "6";
    const date = "15";
    const year = "2027";
    const expectedList = [monthNumber,date,year];

    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    const calendarPage = new CalendarPage(page);
    await calendarPage.clickDeliveryDate();
    await calendarPage.clickXXLabel();
    await calendarPage.clickXXLabel();
    await page.getByText(year).click();
    await page.locator(".react-calendar__year-view__months__month").nth(Number(monthNumber) - 1).click();
    await page.locator("//abbr[text()='" + date + "']").click();
    const inputs = await page.locator(".react-date-picker__inputGroup input");
    for (let index = 0; index <inputs.length; index++)
    {
        const value =inputs[index].getAttribute("value");
        expect(value).toEqual(expectedList[index]);
    }
    await page.pause();

});