import { Service } from "@shared/api"
import { useMemo, useState } from "react"

export const useSearchPaymentServices = (services: Service[]) => {
    const [searchText, setSearchText] = useState("")

    const filteredServices = useMemo(() => {
        return services.filter(service => service.service_name.toLowerCase().includes(searchText.toLowerCase()))
    }, [services, searchText])

    return { 
        filteredServices,
        searchText,
        setSearchText
    }
}