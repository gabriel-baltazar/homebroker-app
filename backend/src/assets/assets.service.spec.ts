import { Test, TestingModule } from '@nestjs/testing';
import { AssetsService } from './assets.service';

describe('AssetsService', () => {
  let service: AssetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssetsService],
    }).compile();

    service = module.get<AssetsService>(AssetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all assets', async () => {
    const assets = await service.findAll();
    expect(assets).toBeDefined();
  });

  it('should return an asset by id', async () => {
    const assetId = '1';
    const asset = await service.findOne(assetId);
    expect(asset).toBeDefined();
  });

  it('should create a new asset', async () => {
    const newAsset = {
      name: 'New Asset',
      symbol: 'NEW',
      image: 'http://example.com/image.png',
      price: '100',
    };
    const createdAsset = await service.create(newAsset);
    expect(createdAsset).toBeDefined();
    expect(createdAsset.name).toEqual(newAsset.name);
  });

  it('should update an asset', async () => {
    const assetId = '1';
    const updatedAsset = {
      name: 'Updated Asset',
      symbol: 'UPD',
      image: 'http://example.com/updated_image.png',
      price: '200',
    };
    const result = await service.update(assetId, updatedAsset);
    expect(result).toBeDefined();
    expect(result.modifiedCount).toEqual(1);
  });

  it('should delete an asset', async () => {
    const assetId = '1';
    const result = await service.remove(assetId);
    expect(result).toBeDefined();
  });
});
