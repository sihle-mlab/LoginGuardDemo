import { LoginComponent } from "./pages/login/login.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { HomeComponent } from "./pages/home/home.component";
import { AuthenticationGuard } from "./app.guard";
import { DailyTechnicalsComponent } from "./pages/daily-technicals/daily-technicals.component";

export const AppRoutes = [

      {
        path: "",
        component: HomeComponent,
        canActivate: [AuthenticationGuard]
      }, {
          path: "login",
          component: LoginComponent
      }, {
        path: "daily-technicals",
        canActivate: [AuthenticationGuard],
        component: DailyTechnicalsComponent
    }

    
]

