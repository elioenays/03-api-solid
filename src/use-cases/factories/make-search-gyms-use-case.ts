import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import SearchGymsUseCase from '../search-gyms'

export function makeSearchGymsUseCase() {
  const checkInsRepository = new PrismaGymsRepository()
  const useCase = new SearchGymsUseCase(checkInsRepository)

  return useCase
}
