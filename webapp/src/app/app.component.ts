import { Component, ElementRef } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';


import { LandMarks, CrownChinPointPair, TiledPhotoRequest, PassportStandard, UnitType, Canvas } from './model/datatypes';
import { BackEndService } from './services/back-end.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {

    imageKey: string;
    imageSrc: string | ArrayBuffer = '#';
    outImgSrc: any = '#';

    // Model data
    crownChinPointPair: CrownChinPointPair;
    passportStandard: PassportStandard = {
        pictureWidth: 35,
        pictureHeight: 45,
        faceHeight: 34,
        units: UnitType.mm
    };
    canvas: Canvas = {
        height: 4,
        width: 6,
        resolution: 300,
        units: UnitType.inch
    };

    constructor(
        public el: ElementRef,
        private http: Http,
        private beService: BackEndService) {
    }

    loadImage(event) {
        const fileList: FileList = event.target.files;
        if (fileList && fileList[0]) {
            const file = fileList[0];
            this.crownChinPointPair = null;
            // Upload the file to the server to detect landmarks
            this.beService.uploadImageToServer(file).then(imgKey => {
                this.imageKey = imgKey;
                this.retrieveLandmarks();
            });
            // Read the image and display it
            const reader = new FileReader();
            reader.onload = () => {
                const imgdata = reader.result;
                this.imageSrc = imgdata;
            };
            reader.readAsDataURL(file);
        }
    }

    retrieveLandmarks() {
        const params: URLSearchParams = new URLSearchParams();
        params.set('imgKey', this.imageKey);

        this.http.get('/api/landmarks', { search: params }).subscribe(data => {
            const landmarks: LandMarks = data.json();
            if (landmarks.errorMsg) {
                console.log(landmarks.errorMsg);
            } else {
                if (landmarks.crownPoint && landmarks.chinPoint) {
                    console.log('Landmarks calculated.');
                    this.crownChinPointPair = landmarks;
                }
            }
        }, err => {
            console.log(err);
        });
    }

    onLandmarksEdited() {
    }

    createPrint() {
        console.log('Creating print output');
        const req = new TiledPhotoRequest(this.imageKey, this.passportStandard,
            this.canvas, this.crownChinPointPair);
        this.beService.getTiledPrint(req).then(outputDataUrl => {
            this.outImgSrc = outputDataUrl;
        });
    }
}
