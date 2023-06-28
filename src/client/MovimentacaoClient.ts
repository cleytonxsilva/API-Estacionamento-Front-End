import axios, { AxiosInstance } from "axios";
import { Movimentacao } from "@/model/Movimentacao";

export class MovimentacaoClient{
private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number) : Promise<Movimentacao> {
        try {
            return (await this.axiosClient.get<Movimentacao>(`/movimentacao?id=${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async listaCompleta() : Promise<Movimentacao[]>{
        try {
            return (await this.axiosClient.get<Movimentacao[]>(`/movimentacao/lista`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

	public async cadastrar(movimentacao: Movimentacao): Promise<string> {
		try {
			return (await this.axiosClient.post<string>('/movimentacao', movimentacao)).data
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

	public async editar(id: number, movimentacao: Movimentacao): Promise<string> {
		try {
			return (await this.axiosClient.put<string>(`/movimentacao?id=${movimentacao.id}`, movimentacao)).data
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

    public async excluir(id: number) : Promise<string> {
        try {
            return (await this.axiosClient.delete<string>(`/movimentacao?id=${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }
}export default new MovimentacaoClient();
