import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController } from 'ionic-angular';

import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

//   constructor(public navCtrl: NavController, public navParams: NavParams) {
//   }

//   ionViewDidLoad() {
//     console.log('ionViewDidLoad LoginPage');
//   }

// }
registrarCredencial = { login: '1', senha: '1', lembrarUsuario: false };
    qtdLocalSolicitacoes: number;
    usuarioSalvo: string;
    senhaSalva: string;
    optionsBoxOpen: boolean;
    optionsBoxData: any;
    USUARIO_LOGADO: string = "usuario_logado";
    USUARIO_INVALIDO: string = "usuario_invalido";
    CONF_INVALIDA: string = "conf_invalida";
    texto: any = "Novas Solicitações disponíveis";
    lembrarUsuario: boolean = false;
    USUARIO_VALIDACAO : string = "MVDESENV";
    SENHA_VALIDACAO : string = "MVDESENV";
    isMock : boolean = false;

    constructor(public navCtrl: NavController, private toastCtrl: ToastController, private modalCtrl: ModalController) {

    }

    ionViewDidLoad() {

        this.carregarIdioma();

    }

    ionViewWillEnter() {
        //Seta a informação de demostração como false para entrar em modo normal
        // this.storage.setItem('demostracao', { ativo: false });
    }

    /*
    * Metodo utilizado para carregar o idioma pre definido do aparelho
    */
    public carregarIdioma() {
        // this.globalization.getPreferredLanguage().then(
        //     result => {

        //         let idioma = result.value.toLowerCase().substring(0, 2);

        //          this.translateService.use(idioma);
        //          this.translateService.reloadLang(idioma);

        //     },
        //     erro => {
        //         console.log("Erro ao recuperar idioma");
        //     })
    }

    public login() {

      // if(this.registrarCredencial.login.toUpperCase() === this.USUARIO_VALIDACAO &&
      //    this.registrarCredencial.senha.toUpperCase() === this.SENHA_VALIDACAO){

      //   this.abrirEmDemostracao();

      // }else{
      //   this.storage.getItem('conf').then((data) => {
      //       let confValida: boolean = false;

      //       if (data == null) {
      //           confValida = false;
      //       } else if ((data.url_servico != null && "" != data.url_servico) &&
      //           (data.url_validacao != null && "" != data.url_validacao)) {
      //           confValida = true;
      //       }

            // if (confValida) {

            //     this.auth.login(this.registrarCredencial).subscribe(successLogin => {
            //       if (successLogin.allowed) {
            //         setTimeout(() => {
            //           this.presentToast(this.traduzirCampo(this.USUARIO_LOGADO), true);
            //           //this.navCtrl.setRoot(SelecionarEmpresaPage);
            //           this.navCtrl.push(SelecionarEmpresaPage);
            //         });
            //       } else {
            //         this.presentToast(this.traduzirCampo(this.USUARIO_INVALIDO), false);
            //         console.log(successLogin);
            //       }
            //     },
            //     error => {
            //       console.log(error);
            //       this.presentToast(this.traduzirCampo(this.USUARIO_INVALIDO), false);
            //     });
            //   }

      //   }, (error) => {
      //       this.presentToast(this.traduzirCampo(this.CONF_INVALIDA), false);
      //   });
      // }      

      this.navCtrl.setRoot(HomePage);

    }

    abrirConfCliente() {

        // let modal = this.modalCtrl.create(ConfClientePage);
        // modal.present();

    }

    /**
    * Metodo utilizado para exibir o alerta na parte inferiro da tela ao
    * aprovar ou rejeitar uma solicitação
    */
    presentToast(mensagem: string, sucesso: boolean) {
        let toast = this.toastCtrl.create({
            message: mensagem,
            duration: 2000,
            cssClass: sucesso ? "toast-sucesso" : "toast-falha"
        });
        toast.present();
    }


    /**
    * Tradução generica
    */
    traduzirCampo(texto: string) {
        // this.translateService.get(texto).subscribe(
        //     value => {
        //         texto = value;
        //         console.log(texto);
        //     }
        // )
        return texto;
    }

    abrirCadastroInteressado() {
        // this.emailComposer.isAvailable().then((available) => {
        //     if (available) {
        //         console.log(available);
        //     }
        // }).catch(() => {
        //     console.log('EmailComposer.isAvailable error');
        // });

        // let email = {
        //     to: 'comercial@mv.com.br',
        //     // cc: 'comercial@mv.com.br',
        //     // bcc: ['john@doe.com', 'jane@doe.com'],
        //     // attachments: [
        //     //   'file://img/logo.png',
        //     //   'res://icon.png',
        //     //   'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
        //     //   'file://README.pdf'
        //     // ],
        //     subject: 'Interessado no Central de Tarefas',
        //     body: "<h2>Nos informe alguns dados para entramos em contato<p/><p/></h2>" +
        //     "<h3>Nome: <p/></h3>" +
        //     "<h3>Empresa/Hospital: <p/></h3>" +
        //     "<h3>Telefone: <p/></h3>" +
        //     "<h3>Conte-nos se gostou: <p/></h3>",
        //     isHtml: true
        // };

        // // Send a text message using default options
        // this.emailComposer.open(email);
    }

    abrirEmDemostracao() {

        // this.storage.setItem('demostracao', { ativo: true });
        // this.storage.setItem("conf", { url_servico: "http://", url_validacao: "http://", idioma: "pt" });

        // let empresa : Empresa = new Empresa();
        // empresa.CD_MULTI_EMPRESA = 0;
        // empresa.SN_ATIVO = 1;

        // this.storage.set("empresa", {empresa : empresa});

        this.presentToast(this.traduzirCampo(this.USUARIO_LOGADO), true);

        console.log(this.USUARIO_LOGADO);
    
        this.isMock = true;

        // this.navCtrl.push(SelecionarEmpresaPage);
        


    }

}
