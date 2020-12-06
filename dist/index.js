"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Events = void 0;
class Events {
    constructor() {
        this.onclick = (ev) => {
            if (ev.target instanceof HTMLAnchorElement) {
                ev.preventDefault();
                const anchor = ev.target;
                if (anchor.getAttribute("localLink")?.length > 0) {
                    const localLink = anchor.getAttribute("localLink");
                    console.log(localLink);
                }
                else {
                    console.log("Not a local link.");
                }
            }
            else {
                console.log("Not a link");
            }
        };
        document.onclick = this.onclick;
    }
}
exports.Events = Events;
new Events();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBYSxNQUFNO0lBQ2pCO1FBSVEsWUFBTyxHQUFHLENBQUMsRUFBYyxFQUFFLEVBQUU7WUFDbkMsSUFBSSxFQUFFLENBQUMsTUFBTSxZQUFZLGlCQUFpQixFQUFFO2dCQUMxQyxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3BCLE1BQU0sTUFBTSxHQUFzQixFQUFFLENBQUMsTUFBTSxDQUFDO2dCQUM1QyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLEVBQUUsTUFBTyxHQUFHLENBQUMsRUFBRTtvQkFDakQsTUFBTSxTQUFTLEdBQVcsTUFBTSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUUsQ0FBQztvQkFDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDeEI7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2lCQUNsQzthQUNGO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDM0I7UUFDSCxDQUFDLENBQUM7UUFoQkEsUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2xDLENBQUM7Q0FnQkY7QUFuQkQsd0JBbUJDO0FBRUQsSUFBSSxNQUFNLEVBQUUsQ0FBQyJ9