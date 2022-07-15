import { Component } from '@angular/core';
import { ActionSheetController, AlertController, MenuController, PickerController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  searchText: string;
  icecream = true;

  constructor(
    private alertControlller: AlertController,
    private actionSheetController: ActionSheetController,
    private menuController: MenuController,
    private pickerController: PickerController) { }

  performSearch(txt: string) {
    console.log(`search for ${txt}`);
    this.searchText = undefined;
    this.show(`Searched for ${txt}`);
  }

  async show(message: string) {
    const alert = await this.alertControlller.create({
      header: 'Alert',
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async actionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'More Toppings',
      buttons: [{ text: 'Delete', role: 'destructive' },
      { text: 'Liver' },
      { text: 'Onions' },
      { text: 'Broccoli' }]
    });
    await actionSheet.present();
  }

  async showPicker() {
    const picker = await this.pickerController.create({
      columns: [
        {
          name: 'languages',
          options: [
            {
              text: 'JavaScript',
              value: 'javascript',
            },
            {
              text: 'TypeScript',
              value: 'typescript',
            },
            {
              text: 'Rust',
              value: 'rust',
            },
            {
              text: 'C#',
              value: 'c#',
            },
          ],
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Confirm',
          handler: (value) => {
            window.alert(`You selected: ${value.languages.value}`);
          },
        },
      ],
    });

    await picker.present();
  }

  showMenu() {
    this.menuController.open();
  }
}
