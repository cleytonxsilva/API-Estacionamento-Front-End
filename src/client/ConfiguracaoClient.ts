import axios, { AxiosInstance } from "axios";
import { Configuracao } from "@/model/Configuracao";

export class ConfiguracaoClient{

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/configuracao',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number) : Promise<Configuracao> {
        try {
            return (await this.axiosClient.get<Configuracao>(`/configuracao?id=${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(configuracao: Configuracao): Promise<string> {
		try {
			return (await this.axiosClient.post<string>('/configuracao', configuracao)).data
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

	public async editar(id : number, configuracao: Configuracao): Promise<string> {
		try {
			return (await this.axiosClient.put<string>(`/configuracao?id=${configuracao.id}`, configuracao)).data
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}
}
export default new ConfiguracaoClient();