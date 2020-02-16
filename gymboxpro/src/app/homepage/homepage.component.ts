import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl } from '@angular/forms';
// import { distinct, map, tap, first, mergeMap, last } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();

  email = 'xxxx';
  password = 'xxxx';
  allClasses: object;

  gymSelection = new FormControl('');

  mockData = {
    '2020-02-16': [
      {
        id: '1325785',
        className: 'Rolling with my Yogis',
        time: '09:30',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1280057',
        className: 'Drill Sergeant',
        time: '10:30',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1242745',
        className: 'Power Battle',
        time: '10:30',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1325835',
        className: 'Aerial Yoga',
        time: '10:30',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1280109',
        className: 'Suspenders',
        time: '11:30',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1252440',
        className: 'No Holds Barre',
        time: '12:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1325885',
        className: "Reppin'",
        time: '13:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1268854',
        className: 'Brazilian Jiu Jitsu',
        time: '13:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1255013',
        className: 'Ashtanga Yoga',
        time: '13:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1325936',
        className: 'Muay Thai',
        time: '14:00',
        location: 'Westfield Stratford',
        canBook: true
      }
    ],
    '2020-02-17': [
      {
        id: '1331950',
        className: 'Drill Sergeant',
        time: '06:45',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1243263',
        className: 'Bike & Beats',
        time: '07:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1333798',
        className: 'Ashtanga Yoga',
        time: '07:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1242329',
        className: "Reppin'",
        time: '09:30',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1241303',
        className: 'Cirque It',
        time: '11:45',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1332006',
        className: 'Strongman',
        time: '12:15',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1276504',
        className: 'Bike & Beats',
        time: '12:15',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1275829',
        className: 'Thunder',
        time: '13:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1287538',
        className: 'Yoga For Lifting',
        time: '13:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1269381',
        className: 'Hardcore',
        time: '17:30',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1333591',
        className: 'Vinyasa Flow Yoga',
        time: '17:30',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1299411',
        className: 'Battlebells',
        time: '18:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1299976',
        className: 'Bike & Beats',
        time: '18:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1269433',
        className: 'Beastmode',
        time: '18:15',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1287592',
        className: 'Femme',
        time: '18:15',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1333031',
        className: 'Gymboxing',
        time: '18:30',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1329927',
        className: 'Bike & Beats',
        time: '19:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1268724',
        className: 'WOD Squad',
        time: '19:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1300028',
        className: "Reppin'",
        time: '19:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1269485',
        className: 'Contortion',
        time: '19:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1325986',
        className: 'Brazilian Jiu Jitsu',
        time: '20:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1240232',
        className: 'Pole Tricks',
        time: '20:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1326038',
        className: 'Regeneration Z',
        time: '20:00',
        location: 'Westfield Stratford',
        canBook: true
      }
    ],
    '2020-02-18': [
      {
        id: '1248644',
        className: 'amRAP',
        time: '07:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1240993',
        className: 'Bike & Beats',
        time: '07:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1333081',
        className: 'CounterPunch',
        time: '07:15',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1298486',
        className: 'Ashtanga Yoga',
        time: '07:30',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1240180',
        className: 'Pole Tricks',
        time: '11:45',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1332062',
        className: 'Swingers',
        time: '12:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1328772',
        className: 'Bike & Beats',
        time: '12:15',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1301554',
        className: 'Pilates',
        time: '13:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1332435',
        className: "Reppin'",
        time: '13:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1271513',
        className: 'MetCon',
        time: '17:30',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1299924',
        className: 'Hatha Yoga',
        time: '18:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1326118',
        className: 'Bike & Beats',
        time: '18:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1271863',
        className: 'Callback',
        time: '18:15',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1327054',
        className: 'Bartendaz',
        time: '18:15',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1271409',
        className: 'Sweat to the Beat',
        time: '19:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1326170',
        className: 'Bike & Beats',
        time: '19:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1248800',
        className: 'Cavemen & Neandergals',
        time: '19:15',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1276087',
        className: 'Swingers Club',
        time: '19:15',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1248904',
        className: 'Muay Thai & Sparring',
        time: '19:45',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1269746',
        className: 'Trapeze',
        time: '20:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1245485',
        className: 'Gain Train',
        time: '20:15',
        location: 'Westfield Stratford',
        canBook: true
      }
    ],
    '2020-02-19': [
      {
        id: '1266430',
        className: 'Drill Sergeant',
        time: '06:45',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1333590',
        className: 'Power Battle',
        time: '07:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1329873',
        className: 'Pilates',
        time: '07:15',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1265389',
        className: "Reppin'",
        time: '09:30',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1247294',
        className: 'BadAss',
        time: '12:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1331899',
        className: 'Aerial Yoga',
        time: '12:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1326274',
        className: 'MetCon',
        time: '12:45',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1331869',
        className: 'No Holds Barre',
        time: '13:15',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1326326',
        className: 'Hardcore',
        time: '13:15',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1326482',
        className: 'MetCon',
        time: '17:30',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1247450',
        className: 'Contortion',
        time: '18:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1303912',
        className: 'Brazilian Jiu Jitsu',
        time: '18:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1326430',
        className: 'RowingWOD',
        time: '18:15',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1247502',
        className: "Reppin'",
        time: '18:15',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1254157',
        className: 'Pole Tricks',
        time: '19:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1326378',
        className: 'CounterPunch',
        time: '19:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1247554',
        className: 'Functional Bodybuilding',
        time: '19:15',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1269641',
        className: 'Swingers',
        time: '19:15',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1247658',
        className: 'Bike & Beats',
        time: '19:15',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1333131',
        className: 'Gymboxing',
        time: '19:45',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1252390',
        className: 'Callback',
        time: '20:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1269694',
        className: 'BadAss',
        time: '20:15',
        location: 'Westfield Stratford',
        canBook: true
      }
    ],
    '2020-02-20': [
      {
        id: '1332920',
        className: 'Beastmode',
        time: '06:45',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1296076',
        className: 'Bike & Beats',
        time: '07:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1243928',
        className: 'Pilates',
        time: '07:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1275933',
        className: 'BadAss',
        time: '12:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1303962',
        className: 'Yogangster',
        time: '12:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1287797',
        className: 'WOD Squad',
        time: '12:15',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1309915',
        className: 'Sweat to the Beat',
        time: '13:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1333233',
        className: 'Pilates',
        time: '13:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1326534',
        className: 'Pilates',
        time: '17:30',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1247814',
        className: 'Hardcore',
        time: '17:30',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1247866',
        className: 'Gain Train',
        time: '18:15',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1328874',
        className: 'Invert Yourself',
        time: '18:30',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1248070',
        className: 'Bike & Beats',
        time: '18:45',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1333181',
        className: 'Muay Thai',
        time: '18:45',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1247918',
        className: 'Suspenders',
        time: '19:15',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1332166',
        className: 'Swingers',
        time: '19:15',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1328824',
        className: 'Cocoon',
        time: '19:30',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1332224',
        className: 'Dancehall',
        time: '20:15',
        location: 'Westfield Stratford',
        canBook: true
      }
    ],
    '2020-02-21': [
      {
        id: '1257799',
        className: 'Bike & Beats',
        time: '07:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1269537',
        className: 'MetCon',
        time: '07:15',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1269589',
        className: 'Hardcore',
        time: '07:45',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1329187',
        className: 'MetCon',
        time: '12:15',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1329239',
        className: 'Hardcore',
        time: '12:45',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1309968',
        className: 'Vinyasa Flow Yoga',
        time: '13:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1329137',
        className: 'Swingers Club',
        time: '13:15',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1331068',
        className: 'Laughing Therapy',
        time: '17:15',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1326926',
        className: 'MetCon',
        time: '17:30',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1295821',
        className: 'Bike & Beats',
        time: '18:15',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1326794',
        className: 'Cirque It',
        time: '18:15',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1324959',
        className: 'Strongman',
        time: '18:15',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1268242',
        className: 'Gain Train',
        time: '18:15',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1275985',
        className: 'Rehab',
        time: '19:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1326846',
        className: 'Invert Yourself',
        time: '19:15',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1300316',
        className: 'The Fundamentals',
        time: '19:15',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1249523',
        className: 'Pole Tricks',
        time: '20:15',
        location: 'Westfield Stratford',
        canBook: true
      }
    ],
    '2020-02-22': [
      {
        id: '1325686',
        className: 'Pilates',
        time: '09:30',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1327003',
        className: 'Bike & Beats',
        time: '10:30',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1330037',
        className: 'Superfly',
        time: '10:30',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1326950',
        className: 'Sweat to the Beat',
        time: '11:15',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1330089',
        className: 'False Grip',
        time: '11:30',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1274155',
        className: 'Power Battle',
        time: '11:30',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1249471',
        className: 'Sluggers Club',
        time: '11:30',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1280161',
        className: 'Femme',
        time: '12:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1268502',
        className: 'Aerial Hoop',
        time: '12:45',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1288115',
        className: 'Pound',
        time: '13:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1253903',
        className: 'Battlebells',
        time: '13:30',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1276557',
        className: 'Aerial Yoga',
        time: '14:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1276037',
        className: "Reppin'",
        time: '14:00',
        location: 'Westfield Stratford',
        canBook: true
      }
    ],
    '2020-02-23': [
      {
        id: '1325786',
        className: 'Rolling with my Yogis',
        time: '09:30',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1325836',
        className: 'Aerial Yoga',
        time: '10:30',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1280058',
        className: 'Drill Sergeant',
        time: '10:30',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1242746',
        className: 'Power Battle',
        time: '10:30',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1280110',
        className: 'Suspenders',
        time: '11:30',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1252441',
        className: 'No Holds Barre',
        time: '12:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1268855',
        className: 'Brazilian Jiu Jitsu',
        time: '13:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1325886',
        className: "Reppin'",
        time: '13:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1255014',
        className: 'Ashtanga Yoga',
        time: '13:00',
        location: 'Westfield Stratford',
        canBook: true
      },
      {
        id: '1325937',
        className: 'Muay Thai',
        time: '14:00',
        location: 'Westfield Stratford',
        canBook: true
      }
    ]
  };

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // this.subscriptions.add(
    //   this.apiService
    //     .getAllClasses(this.email, this.password)
    //     .subscribe(res => {
    //       this.allClasses = res;
    //       this.createLocationOptions();
    //     })
    // );

    this.createLocationOptions();
  }

  createLocationOptions() {
    const locations: string[] = [];
    // const dates = Object.keys(this.allClasses);
    // console.log(dates);

    // dates.forEach(date => {
    //   of(this.allClasses[date]), tap(x => console.log('the outcome is', x));
    // });

    // MOCK IMPLEMENTATION

    const dates = Object.keys(this.mockData);

    dates.forEach(date => {
      // console.log(this.mockData[date]);
      this.mockData[date].forEach(gymClass => {
        locations.push(gymClass.location);
      });
    });

    console.log('unique locations', [...new Set(locations)]);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
