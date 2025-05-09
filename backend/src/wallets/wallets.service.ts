import { Injectable } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { Model } from 'mongoose';
import { Wallet } from './entities/wallet.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class WalletsService {
  constructor(@InjectModel(Wallet.name) private walletSchema: Model<Wallet>) {}
  create(createWalletDto: CreateWalletDto) {
    return this.walletSchema.create(createWalletDto);
  }

  findAll() {
    return this.walletSchema.find();
  }

  findOne(id: string) {
    return this.walletSchema.findById(id);
  }

  remove(id: string) {
    return this.walletSchema.deleteOne({ _id: id });
  }
}
