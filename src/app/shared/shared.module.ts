import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NoProductsFoundComponent } from "./components/no-products-found/no-products-found.component";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { FormsModule, FormBuilder,ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Router } from "@angular/router";
import { OwlModule } from "ngx-owl-carousel";
import { NgxPaginationModule } from "ngx-pagination";
import { HttpClientModule } from "@angular/common/http";
import { AgmCoreModule } from "@agm/core";
import { NoAccessComponent } from "./components/no-access/no-access.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { FireBaseConfig } from "../../environments/firebaseConfig";
import { FilterByBrandPipe } from "./pipes/filterByBrand.pipe";
import { ProductService } from "./services/product.service";
import { StorageService } from "./services/storage.service"
import { AdminGaurd } from "./services/admin-gaurd";
import { AuthGuard } from "./services/auth_gaurd";
import { AuthService } from "./services/auth.service";
import { UserService } from "./services/user.service";
import { TranslatePipe } from "./pipes/translate.pipe";
import { NgxContentLoadingModule } from "ngx-content-loading";
import { CardLoaderComponent } from "./components/card-loader/card-loader.component";
import { MomentTimeAgoPipe } from "./pipes/moment-time-ago.pipe";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { CdkTableModule } from "@angular/cdk/table";
import { CdkTreeModule } from "@angular/cdk/tree";
import { MatAutocompleteModule, MatBadgeModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule,
	MatChipsModule, MatStepperModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule,
	MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule,
	MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule,
	MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule,
	 MatTooltipModule, 
	 MatTreeModule} from '@angular/material';
@NgModule({
	imports: [
		CommonModule,
		MDBBootstrapModule.forRoot(),
		AngularFireModule.initializeApp(FireBaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
		AngularFireAuthModule,
		FormsModule,
		HttpClientModule,
		RouterModule,
		OwlModule,
		NgxPaginationModule,
		AgmCoreModule.forRoot({
			apiKey: "AIzaSyDMbxW3MlwUP2vrAZVJyu7pYqZa1LthvTE"
		}),
		NgxContentLoadingModule,
		MatTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
	],
	declarations: [
		NoProductsFoundComponent,
		FilterByBrandPipe,
		NoAccessComponent,
		PageNotFoundComponent,
		TranslatePipe,
		CardLoaderComponent,
		MomentTimeAgoPipe
	],
	exports: [
		NoProductsFoundComponent,
		FormsModule,
		MDBBootstrapModule,
		AngularFireModule,
		AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
		FormsModule,
		RouterModule,
		OwlModule,
		NgxPaginationModule,
		FilterByBrandPipe,
		AgmCoreModule,
		NoAccessComponent,
		PageNotFoundComponent,
		TranslatePipe,
		MomentTimeAgoPipe,
		NgxContentLoadingModule,
		CardLoaderComponent,
		CdkTableModule,
		CdkTreeModule,
		DragDropModule, ScrollingModule,
		MatTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
	],
	providers: [AuthService, AuthGuard, AdminGaurd, ProductService, UserService, FormBuilder]
})
export class SharedModule { }
