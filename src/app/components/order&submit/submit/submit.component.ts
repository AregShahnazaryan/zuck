import {Component, OnInit} from '@angular/core';
import {Options, LabelType} from 'ng5-slider';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';


@Component({
  selector: 'app-order',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {
  strategy = 'order-type';
  integrated = 'order-type';
  digital = 'order-type';
  video = 'order-type';
  visual = 'order-type';
  nonStandard = 'order-type';
  required = false;
  orderTypes = [];
  showPortfolio = false;
  myParam: string;
  showInvalids = false;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.submitForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required]),
      surname: this.formBuilder.control('', [Validators.required]),
      minValue: this.formBuilder.control(''),
      maxValue: this.formBuilder.control(''),
      salery: this.formBuilder.control(''),
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      phoneNumber: this.formBuilder.control(''),
      motivation: this.formBuilder.control(''),
      fileCv: this.formBuilder.control(''),
      link: this.formBuilder.control('', [Validators.required]),
      portfolio: this.formBuilder.control('', [Validators.required]),
      filePortfolio: this.formBuilder.control(''),
    });
  }

  submitForm: FormGroup;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.typeButtons(params.work);
    });
  }

  typeButtons(type) {
    switch (type) {
      case 'graphic designer':
        if (this.strategy === 'order-type') {
          this.strategy = 'order-type-focused';
          this.orderTypes.push('graphic designer');
          this.required = false;
          this.showPortfolio = true;
        } else {
          this.strategy = 'order-type';
          this.showPortfolio = false;
          for (let u = 0; u < this.orderTypes.length; u++) {
            if (this.orderTypes[u] === 'graphic designer') {
              this.orderTypes.splice(u);
            }
          }
        }
        break;
      case 'copywriter':
        if (this.integrated === 'order-type') {
          this.integrated = 'order-type-focused';
          this.orderTypes.push('copywriter');
          this.required = false;

        } else {
          this.integrated = 'order-type';
          for (let u = 0; u < this.orderTypes.length; u++) {
            if (this.orderTypes[u] === 'copywriter') {
              this.orderTypes.splice(u);
            }
          }
        }
        break;
      case 'project manager':
        if (this.digital === 'order-type') {
          this.digital = 'order-type-focused';
          this.orderTypes.push('project manager');
          this.required = false;

        } else {
          this.digital = 'order-type';
          for (let u = 0; u < this.orderTypes.length; u++) {
            if (this.orderTypes[u] === 'project manager') {
              this.orderTypes.splice(u);
            }
          }
        }
        break;
      default:
        break;
    }
  }

  submit() {
    this.showInvalids = true;
    console.log(this.submitForm.valid);
    if (this.submitForm.valid) {
      this.router.navigateByUrl('good-luck');
    }
  }
}