import InMemoryGymsRepository from '@/repositories/in-memory/in-memory-gyms-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import CreateGymUseCase from './create-gym'

let gymsRepository: InMemoryGymsRepository
let sut: CreateGymUseCase

describe('Create Gym Use Case', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new CreateGymUseCase(gymsRepository)
  })

  it('should not be able to create gym', async () => {
    const { gym } = await sut.execute({
      title: 'Javascript gym',
      description: null,
      phone: null,
      latitude: -10.2592954,
      longitude: -48.3090628,
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})
