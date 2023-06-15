import { Modelo } from "@/model/Modelo";
import axios, { AxiosInstance } from "axios";

export class ModeloClient{
private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/modelo',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number) : Promise<Modelo> {
        try {
            return (await this.axiosClient.get<Modelo>(`/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async listaCompleta(marca: Modelo[]) : Promise<Modelo[]>{
        try {
            return (await this.axiosClient.get<Modelo[]>(`/lista`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

	public async cadastrar(modelo: Modelo): Promise<void> {
		try {
			return (await this.axiosClient.post('/', modelo))
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

	public async editar(modelo: Modelo): Promise<void> {
		try {
			return (await this.axiosClient.put(`/${modelo.id}`, modelo)).data
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
