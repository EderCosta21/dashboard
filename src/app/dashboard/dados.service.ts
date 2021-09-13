import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DadosService {

    readonly dados = [
        ['Janeiro', 33],
        ['Fevereiro', 68],
        ['Março', 49],
        ['Abril', 15],
        ['Maio', 80],
        ['Junho', 27],
        ['Julho', 79],
        ['Agosto', 11],
        ['Setembro', 60],
        ['Outubro', 89],
        ['Novembro', 41],
        ['Dezembro', 10],
    ];

	constructor() {}

	/**
	 * Retorna um observable contendo os dados a serem
	 * exibidos no gráfico.
	 *
	 * @return Observable<any>
	 */
	obterDados(): Observable<any> {
		return new Observable(observable => {
			observable.next(this.dados);
			observable.complete();
		});
	}

}