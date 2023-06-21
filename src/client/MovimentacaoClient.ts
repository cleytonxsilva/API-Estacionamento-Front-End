import axios, { AxiosInstance } from "axios";
import { Movimentacao } from "@/model/Movimentacao";

export class MovimentacaoClient{
private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/movimentacao',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number) : Promise<Movimentacao> {
        try {
            return (await this.axiosClient.get<Movimentacao>(`?id=${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async listaCompleta(movimentacao: Movimentacao[]) : Promise<Movimentacao[]>{
        try {
            return (await this.axiosClient.get<Movimentacao[]>(`/lista`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

	public async cadastrar(movimentacao: Movimentacao): Promise<void> {
		try {
			return (await this.axiosClient.post('/', movimentacao))
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

	public async editar(movimentacao: Movimentacao): Promise<void> {
		try {
			return (await this.axiosClient.put(`/${movimentacao.id}`, movimentacao)).data
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

    public async excluir(id: number) : Promise<void> {
        try {
            return (await this.axiosClient.delete(`?id=${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }
}export default new MovimentacaoClient();
