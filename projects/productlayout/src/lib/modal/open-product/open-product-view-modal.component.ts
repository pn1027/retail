import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  templateUrl: './open-product-view-modal.component.html',
  styleUrls: ['./open-product-view-modal.component.css']
})
export class OpenProductViewModalComponent {


	constructor(private activemodalService: NgbActiveModal) {}
	closeModal(){
		this.activemodalService.dismiss();
	}

  

}
