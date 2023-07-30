import { Module } from '@nestjs/common';

import { BankAccountsController } from '_modules/bank-accounts/bank-accounts.controller';
import { BankAccountsService } from '_modules/bank-accounts/services/bank-accounts.service';
import { ValidateBankAccountOwnershipService } from '_modules/bank-accounts/services/validate-bank-account-ownership.service';

@Module({
  controllers: [BankAccountsController],
  providers: [BankAccountsService, ValidateBankAccountOwnershipService],
  exports: [ValidateBankAccountOwnershipService],
})
export class BankAccountsModule {}
