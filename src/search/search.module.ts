import { Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';

@Module({imports: [
    ElasticsearchModule.registerAsync({
        useFactory: ()=>({
            node:'https://search-practice-dev-eu4kg2nkfc4qvyzs6aksuvaapy.ap-northeast-2.es.amazonaws.com:443',
            maxRetries:10,
            requestTimeout:60000,
            pingTimeout:60000,
            sniffOnStart: true
        })
    })
]})
export class SearchModule {}
