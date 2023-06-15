import axios, { AxiosInstance } from "axios";
import { Condutor } from "@/model/Condutor";

export class CondutorClient {

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/estacionamento',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number) : Promise<Condutor> {
        try {
            return (await this.axiosClient.get<Condutor>(`/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async listaCompleta(condutor: Condutor[]) : Promise<Condutor[]>{
        try {
            return (await this.axiosClient.get<Condutor[]>(`/lista`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

	public async cadastrar(condutor: Condutor): Promise<void> {
		try {
			return (await this.axiosClient.post('/', condutor))
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

	public async editar(condutor: Condutor): Promise<void> {
		try {
			return (await this.axiosClient.put(`/${condutor.id}`, condutor)).data
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

    public async excluir(id: number) : Promise<void> {
        try {
            return (await this.axiosClient.delete(`/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }
}

